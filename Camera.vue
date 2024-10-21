<template>
    <div class="container-fluid">
      <!-- Video Stream -->
      <video ref="video" autoplay v-if="cameraActive" style="margin-top: 10px; border: 1px solid black;"></video>
      <!-- Capture Button -->
      <button class="mt-2" v-if="cameraActive" width="640" height="580" @click="capture">Capture</button>
      <!-- Canvas to hold captured image -->
      <canvas ref="canvas" width="640" height="580" style="display: none;"></canvas>
    </div>
  </template>

  <script>
  import axios from 'axios';
  /**
   * CameraComponent is a Vue component that provides functionality
   * to access the webcam and capture images.
   *
   * @component
   * @example
   * <Camera/>
   */
  export default {
    name: "Camera",
    /**
     * Data properties for the component.
     * @returns {Object} The component's data properties.
     * @property {boolean} cameraActive - Indicates whether the camera is active.
     * @property {MediaStream} stream - Holds the media stream from the camera.
     * @property {Array} capturedImages - Holds the captured image data URLs.
     */
    data() {
      return {
        cameraActive: false, // To control the camera state
        stream: null, // Store the media stream
        capturedImages: [], // Array to hold captured image data URLs
      };
    },
    /**
     * Lifecycle hook that is called when the component is mounted.
     * Automatically starts the camera when the component is loaded.
     */
    mounted() {
      this.startCamera();
    },
    /**
     * Lifecycle hook that is called before the component is destroyed.
     * Stops the camera stream when navigating away from the component.
     */
    beforeDestroy() {
      this.stopCamera();
    },
  
    methods: {
      /**
       * Starts the camera by requesting access to the user's webcam.
       * If access is granted, the video stream is displayed in the video element.
       *
       * @async
       * @throws {Error} If there is an issue accessing the camera.
       */
      async startCamera() {
        try {
          // Request access to the webcam
          this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
  
          this.cameraActive = true; // Activate camera first
  
          // Wait for the DOM to update before accessing video ref
          this.$nextTick(() => {
            const video = this.$refs.video; // Get video reference
            if (video) {
              video.srcObject = this.stream; // Set the video source to the stream
            } else {
              console.error("Video element is not defined.");
            }
          });
        } catch (error) {
          console.error("Error accessing the camera: ", error);
          alert("Could not access the camera. Check browser permissions or try HTTPS.");
        }
      },
  
      /**
       * Stops the camera by stopping the media stream.
       */
      stopCamera() {
        if (this.stream) {
          const tracks = this.stream.getTracks();
          tracks.forEach(track => track.stop()); // Stop all tracks of the media stream
          this.cameraActive = false; // Deactivate camera
          this.stream = null; // Clear the stream
        }
      },
  
      /**
       * Captures the current video frame and draws it onto the canvas.
       * Sends the captured image to the FastAPI backend.
       *
       * @async
       */
      async capture() {
        const context = this.$refs.canvas.getContext('2d');
        context.drawImage(this.$refs.video, 0, 0, 640, 480);
  
        // Extract image data
        const imageData = this.$refs.canvas.toDataURL('image/png');
        this.capturedImages.push(imageData); // Store captured image

        // Convert imageData to Blob
        const response = await fetch(imageData);
        const blob = await response.blob();
        
        const formData = new FormData();
        formData.append('file', blob, `captured_image_${this.capturedImages.length}.png`); // Give a unique filename
  
        // Send the image to the FastAPI backend
      try {
        const uploadResponse = await axios.post('http://127.0.0.1:8000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(uploadResponse.data); // Handle the response as needed
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    },
    }
  };
  </script>
  
  <style scoped>
  .container-fluid {
    margin-top: -30px;
    display: flex; /* Use flexbox for layout */
    flex-direction: column; /* Arrange items in a column */
    align-items: center; /* Center items horizontally */
    justify-content: center; /* Center items vertically */
    height: 100vh; /* Optional: fill the height of the viewport */
  }
  
  button {
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 10px;
  }
  
  /* Responsive video styles */
  video {
    width: 100%;
    max-width: 700px; /* Maintain maximum width */
    height: auto;
    display: block;
  }
  
  </style>
  