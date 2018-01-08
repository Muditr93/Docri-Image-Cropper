function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {

                    $('.blah')
                        .attr('display', 'block !importnt');

                    $('.blahh')
                        .attr('display', 'block !importnt');
                    $('#imgdown').attr('href', e.target.result );

                var imageCropper = {

  ctx: document.getElementById("panel").getContext("2d"),

  image: new Image(),

  scale: 1,

  click: false,

  baseX: 0,

  baseY: 0,

  lastPointX: 0,

  lastPointY: 0,

  cutoutWidth: 40,

  windowWidth: 300,

  init: function() {
    this.image.setAttribute('crossOrigin', 'anonymous');
    this.image.src = e.target.result ;
    this.image.onload = this.onImageLoad.bind(this);
    document.getElementById("cropImgButtn").onclick = this.showCropedImage.bind(this);
    document.getElementById("scaleSlider").oninput = this.updateScale.bind(this);
  },

  onImageLoad: function() {
    this.drawimage(0, 0);
    this.ctx.canvas.onmousedown = this.onMouseDown.bind(this);
    this.ctx.canvas.onmousemove = this.onMouseMove.bind(this);
    this.ctx.canvas.onmouseup = this.onMouseUp.bind(this);
  },
  drawimage: function(x, y) {
    var w = this.ctx.canvas.width,
      h = this.ctx.canvas.height;
    this.ctx.clearRect(0, 0, w, h);
    this.baseX = this.baseX + (x - this.lastPointX);
    this.baseY = this.baseY + (y - this.lastPointY);
    this.lastPointX = x;
    this.lastPointY = y;
    this.ctx.drawImage(this.image, this.baseX, this.baseY, Math.floor(this.image.width * this.scale), Math.floor(this.image.height * this.scale));
    this.drawCutout();
  },

  drawCutout: function() {
    this.ctx.fillStyle = 'rgba(128, 128, 128, 0.7)';
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    //Draw anti clockwise rectangle, for cutout.
    this.ctx.moveTo(this.cutoutWidth, this.cutoutWidth);
    this.ctx.lineTo(this.cutoutWidth, this.windowWidth + this.cutoutWidth);
    this.ctx.lineTo(this.cutoutWidth + this.windowWidth, this.cutoutWidth + this.windowWidth);
    this.ctx.lineTo(this.cutoutWidth + this.windowWidth, this.cutoutWidth);
    this.ctx.closePath();
    this.ctx.fill();
  },

  onMouseDown: function(e) {
    e.preventDefault();
    var loc = this.windowToCanvas(e.clientX, e.clientY);
    this.click = true;
    this.lastPointX = loc.x;
    this.lastPointY = loc.y;
  },
  onMouseMove: function(e) {
    e.preventDefault();
    if (this.click) {
      var loc = this.windowToCanvas(e.clientX, e.clientY);
      this.drawimage(loc.x, loc.y);
    }
  },

  onMouseUp: function(e) {
    e.preventDefault();
    this.click = false;
  },

  windowToCanvas: function(x, y) {
    var canvas = this.ctx.canvas;
    var bbox = canvas.getBoundingClientRect();
    return {
      x: x - bbox.left * (canvas.width / bbox.width),
      y: y - bbox.top * (canvas.height / bbox.height)
    };
  },
  showCropedImage: function() {
    var temp_ctx, temp_canvas;
    temp_canvas = document.createElement('canvas');
    temp_ctx = temp_canvas.getContext('2d');
    temp_canvas.width = this.windowWidth;
    temp_canvas.height = this.windowWidth;
    temp_ctx.drawImage(this.ctx.canvas, this.cutoutWidth, this.cutoutWidth, this.windowWidth, this.windowWidth, 0, 0, this.windowWidth, this.windowWidth);
    var vData = temp_canvas.toDataURL();
    document.getElementsByClassName('blah').src = vData;
    document.getElementsByClassName('blahh').src = vData;
    $('#crop_result').attr('src', vData );
    $('.blah').attr('src', vData );
    $('.blahh').attr('src', vData );
    $('#imgdown').attr('href', vData );
},

  updateScale: function(e) {
    this.scale = e.target.value;
    this.drawimage(this.lastPointX, this.lastPointY);
  }
};

imageCropper.init();


                };



                reader.readAsDataURL(input.files[0]);
            }
        }
