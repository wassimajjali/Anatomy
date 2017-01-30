var glContextOsVisualization = null;
var prgOsVisualization = null; 

/**
 * Allow to initialize Shaders.
 */
function getShaderOsVisualization(gl, id) {
    var script = document.getElementById(id);
    if (!script) {
        return null;
    }

    var str = "";
    var k = script.firstChild;
    while (k) {
        if (k.nodeType == 3) {
            str += k.textContent;
        }
        k = k.nextSibling;
    }

    var shader;
    if (script.type == "x-shader/x-fragment") {
        shader = glContextOsVisualization.createShader(glContextOsVisualization.FRAGMENT_SHADER);
    } else if (script.type == "x-shader/x-vertex") {
        shader = glContextOsVisualization.createShader(glContextOsVisualization.VERTEX_SHADER);
    } else {
        return null;
    }

    glContextOsVisualization.shaderSource(shader, str);
    glContextOsVisualization.compileShader(shader);

    if (!glContextOsVisualization.getShaderParameter(shader, glContextOsVisualization.COMPILE_STATUS)) {
        alert(glContextOsVisualization.getShaderInfoLog(shader));
        return null;
    }
    return shader;
}

function initProgramOsVisualization() {
	var fgShader = getShaderOsVisualization(glContextOsVisualization, "shader-fs");
	var vxShader = getShaderOsVisualization(glContextOsVisualization, "shader-vs");

	prgOsVisualization = glContextOsVisualization.createProgram();
	glContextOsVisualization.attachShader(prgOsVisualization, vxShader);
	glContextOsVisualization.attachShader(prgOsVisualization, fgShader);
	glContextOsVisualization.linkProgram(prgOsVisualization);

	if (!glContextOsVisualization.getProgramParameter(prgOsVisualization, glContextOsVisualization.LINK_STATUS)) {
	    alert("Could not initialise shaders");
	}

	glContextOsVisualization.useProgram(prgOsVisualization);


	initShaderParametersOsVisualization(prgOsVisualization);
}

/**
 * The following code snippet creates a vertex buffer and binds the vertices to it.
 */
function getVertexBufferWithVerticesOsVisualization(vertices) {
    var vBuffer = glContextOsVisualization.createBuffer();
    glContextOsVisualization.bindBuffer(glContextOsVisualization.ARRAY_BUFFER, vBuffer);
    glContextOsVisualization.bufferData(glContextOsVisualization.ARRAY_BUFFER, new Float32Array(vertices), glContextOsVisualization.STATIC_DRAW);
    glContextOsVisualization.bindBuffer(glContextOsVisualization.ARRAY_BUFFER, null);

    return vBuffer;
}

/**
 * The following code snippet creates a vertex buffer and binds the indices to it.
 */
function getIndexBufferWithIndicesOsVisualization(indices) {
    var iBuffer = glContextOsVisualization.createBuffer();
    glContextOsVisualization.bindBuffer(glContextOsVisualization.ELEMENT_ARRAY_BUFFER, iBuffer);
    glContextOsVisualization.bufferData(glContextOsVisualization.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), glContextOsVisualization.STATIC_DRAW);
    glContextOsVisualization.bindBuffer(glContextOsVisualization.ELEMENT_ARRAY_BUFFER, null);

    return iBuffer;
}


function getArrayBufferWithArrayOsVisualization(values) {
    //The following code snippet creates an array buffer and binds the array values to it
    var vBuffer = glContextOsVisualization.createBuffer();
    glContextOsVisualization.bindBuffer(glContextOsVisualization.ARRAY_BUFFER, vBuffer);
    glContextOsVisualization.bufferData(glContextOsVisualization.ARRAY_BUFFER, new Float32Array(values), glContextOsVisualization.STATIC_DRAW);
    glContextOsVisualization.bindBuffer(glContextOsVisualization.ARRAY_BUFFER, null);

    return vBuffer;
}

function initTextureWithImageOsVisualization(sFilename, texturen) {
    var anz = texturen.length;
    texturen[anz] = glContextOsVisualization.createTexture();

    texturen[anz].image = new Image();
	
    texturen[anz].image.onload = function() {
        glContextOsVisualization.bindTexture(glContextOsVisualization.TEXTURE_2D, texturen[anz]);
        glContextOsVisualization.pixelStorei(glContextOsVisualization.UNPACK_FLIP_Y_WEBGL, true);
        glContextOsVisualization.texImage2D(glContextOsVisualization.TEXTURE_2D, 0, glContextOsVisualization.RGBA, glContextOsVisualization.RGBA, glContextOsVisualization.UNSIGNED_BYTE, texturen[anz].image);
        glContextOsVisualization.texParameteri(glContextOsVisualization.TEXTURE_2D, glContextOsVisualization.TEXTURE_MIN_FILTER, glContextOsVisualization.NEAREST);
        glContextOsVisualization.texParameteri(glContextOsVisualization.TEXTURE_2D, glContextOsVisualization.TEXTURE_MAG_FILTER, glContextOsVisualization.NEAREST);

        glContextOsVisualization.generateMipmap(glContextOsVisualization.TEXTURE_2D);

        glContextOsVisualization.bindTexture(glContextOsVisualization.TEXTURE_2D, null);
    }

    texturen[anz].image.src = sFilename;

    // let's use a canvas to make textures, with by default a random color (red, green, blue)
    function rnd() {
        return Math.floor(Math.random() * 256);
    }

    var c = document.createElement("canvas");
    c.width = 64;
    c.height = 64;
    var ctx = c.getContext("2d");
    var red = rnd();
    var green = rnd();
    var blue = rnd();
    ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";

    ctx.fillRect(0, 0, 64, 64);

    glContextOsVisualization.bindTexture(glContextOsVisualization.TEXTURE_2D, texturen[anz]);
    glContextOsVisualization.texImage2D(glContextOsVisualization.TEXTURE_2D, 0, glContextOsVisualization.RGBA, glContextOsVisualization.RGBA, glContextOsVisualization.UNSIGNED_BYTE, c);
    glContextOsVisualization.texParameteri(glContextOsVisualization.TEXTURE_2D, glContextOsVisualization.TEXTURE_MIN_FILTER, glContextOsVisualization.NEAREST);
    glContextOsVisualization.texParameteri(glContextOsVisualization.TEXTURE_2D, glContextOsVisualization.TEXTURE_MAG_FILTER, glContextOsVisualization.NEAREST);
    glContextOsVisualization.texParameteri(glContextOsVisualization.TEXTURE_2D, glContextOsVisualization.TEXTURE_WRAP_S, glContextOsVisualization.CLAMP_TO_EDGE);
    glContextOsVisualization.texParameteri(glContextOsVisualization.TEXTURE_2D, glContextOsVisualization.TEXTURE_WRAP_T, glContextOsVisualization.CLAMP_TO_EDGE);
}

function handleOBJModelOsVisualization(os, filename, data)
{
	console.info(filename + ' has been retrieved from the server');

	var objData = new OBJ.Mesh(data);
	
	os.vertexBufferOs = getVertexBufferWithVerticesOsVisualization(objData.vertices);
	os.normalsBufferOs = getVertexBufferWithVerticesOsVisualization(objData.vertexNormals);
	os.textureBufferOs = getVertexBufferWithVerticesOsVisualization(objData.textures);
	os.indexBufferOs = getIndexBufferWithIndicesOsVisualization(objData.indices);
	
	os.verticesOs = (objData.vertices);
	os.normalsOs = (objData.vertexNormals);
	os.textureOs = (objData.textures);
	os.indicesOs = (objData.indices);


	console.log( "Load : " + os.vertexBufferOs);
	console.log( "Load : " + os.normalsBufferOs);
	console.log( "Load : " + os.textureBufferOs);
	console.log( "Load : " + os.indexBufferOs);

	console.log( "Load : " + os.verticesOs);
	console.log( "Load : " + os.normalsOs);
	console.log( "Load : " + os.textureOs);
	console.log( "Load : " + os.indicesOs);
	
	for(i = 0; i < os.verticesOs.length / 3; i++)
	{
		os.colorsUnSelectedOs.push(0.0, 1.0, 0.0, 1.0);
	}
	
	os.colorsBufferOs = getVertexBufferWithVerticesOsVisualization(os.colorsUnSelectedOs);
	
	os.setupBoundingBoxOsVisualization();
}