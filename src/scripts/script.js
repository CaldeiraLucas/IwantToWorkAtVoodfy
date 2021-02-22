new Vue ({
  el: ".container",
  data: {
    fileUploaded: false,
    fileSubmited: false,
    filePrepared: false,
    dropping: false,
    progress: 0,
    text: "Select a video to get started",
  },
  methods: {
    allowDrop() {
      //this.preventDefault();
      this.dropping = true;
      this.text = "Drop to start uploading";
    },

    dragLeave() {
      //this.preventDefault();
      this.dropping = false;
      this.text = "Select a video to get started";
    },

    submit(){
      //e.preventDefault();
      //this.$refs.form.submit();
      this.dropping = false;
      this.fileSubmited = true;
      this.uploading();
    },

    uploading() {
      var v = this;
      setInterval(function () { 
        if (v.progress < 100)
          v.progress += 10; 
        else if (v.progress == 100 && v.fileUploaded == false){
          setTimeout(function () {clearInterval(); v.progress = 0; v.fileUploaded = true}, 1000);
        }
        else {
          v.progress = 100;
          clearInterval();
        }
      }, 1000) 
    }
  }
});