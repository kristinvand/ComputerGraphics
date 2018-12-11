var gl;
var points;

window.onload = function init() {
    var canvas = document.getElementById("gl-canvas");
    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL isn't available");
    }

    var vertices = [
        //small
        vec2(157,6),
        vec2(165,11),
        vec2(173,18),
        vec2(180,27),
        vec2(189,33),
        vec2(195,40),
        vec2(203,50),
        vec2(208,58),
        vec2(217,68),
        vec2(223,82),
        vec2(228,91),
        vec2(232,103),
        vec2(236,113),
        vec2(239,128),
        vec2(239,139),
        vec2(240,153),
        vec2(241,168),
        vec2(243,185),
        vec2(243,199),
        vec2(243,217),
        vec2(243,231),
        vec2(243,244),
        vec2(242,262),
        vec2(239,278),
        vec2(237,295),
        vec2(235,310),
        vec2(235,325),
        vec2(241,338),
        vec2(249,354),
        vec2(267,412),
        vec2(273,431),
        vec2(275,440),
        vec2(276,452),
        vec2(269,482),
        vec2(256,485),
        vec2(244,486),
        vec2(232,486),
        vec2(222,486),
        vec2(220,489),
        vec2(215,500),
        vec2(212,513),
        vec2(212,523),
        vec2(212,536),
        vec2(204,544),
        vec2(195,544),
        vec2(187,544),
        vec2(178,546),
        vec2(184,554),
        vec2(189,560),
        vec2(189,566),
        vec2(189,574),
        vec2(186,585),
        vec2(176,590),
        vec2(173,601),
        vec2(169,607),
        vec2(165,618),
        vec2(165,628),
        vec2(165,639),
        vec2(165,648),
        vec2(164,663),
        vec2(155,670),
        vec2(151,676),
        vec2(110,689),
        vec2(93,689),
        vec2(81,689),
        vec2(69,689),
        vec2(54,689),
        vec2(36,686),
        vec2(17,680),
        vec2(253,365),
        vec2(256,376),
        vec2(258,386),
        vec2(264,399),
        vec2(271,421),
        vec2(281,464),
        vec2(279,474),

    ];


    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    var bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

    var vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);
    render();
}

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.LINE_STRIP, 0, 56);
}
