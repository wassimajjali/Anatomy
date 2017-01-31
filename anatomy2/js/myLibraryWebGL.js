var tabFile = {"1" : "1.obj", 
			   "2  " : "2.obj",
			   "3" : "3.obj",
			   "4" : "4.obj",
			   "5" : "5.obj", 
			   "6" : "6.obj", 
			   "7" : "7.obj",  
			   "8" : "8.obj", 
			   "9" : "9.obj",
			   "10" : "10.obj",
			   "11" : "11.obj",  
			   "12" : "12.obj", 
			   "13" : "13.obj",
			   "14" : "14.obj", 
			   "15" : "15.obj", 
			   "16" : "16.obj",
			   "17" : "17.obj", 
			   "18" : "18.obj", 
			   "19" : "19.obj",
			   "20" : "20.obj", 
			   "21  " : "21.obj",
			   "22" : "22.obj",
			   "23" : "23.obj",
			   "24" : "24.obj", 
			   "25" : "25.obj", 
			   "26" : "26.obj",  
			   "27" : "27.obj", 
			   "28" : "28.obj",
			   "29" : "29.obj",
			   "30" : "30.obj",   
			   "31" : "31.obj",
			   "32" : "32.obj", 
			   "33" : "33.obj",  
			   "34" : "34.obj", 
			   "35" : "35.obj",
			   "36" : "36.obj",
			   "37" : "37.obj"};

var tabDescription ={"1" : "1.obj", 
			   "2  " : "2.obj",
			   "3" : "3.obj",
			   "4" : "4.obj",
			   "5" : "5.obj", 
			   "6" : "6.obj", 
			   "7" : "7.obj",  
			   "8" : "8.obj", 
			   "9" : "9.obj",
			   "10" : "10.obj",
			   "11" : "11.obj",  
			   "12" : "12.obj", 
			   "13" : "13.obj",
			   "14" : "14.obj", 
			   "15" : "15.obj", 
			   "16" : "16.obj",
			   "17" : "17.obj", 
			   "18" : "18.obj", 
			   "19" : "19.obj",
			   "20" : "20.obj", 
			   "21  " : "21.obj",
			   "22" : "22.obj",
			   "23" : "23.obj",
			   "24" : "24.obj", 
			   "25" : "25.obj", 
			   "26" : "26.obj",  
			   "27" : "27.obj", 
			   "28" : "28.obj",
			   "29" : "29.obj",
			   "30" : "30.obj",   
			   "31" : "31.obj",
			   "32" : "32.obj", 
			   "33" : "33.obj",  
			   "34" : "34.obj", 
			   "35" : "35.obj",
			   "36" : "36.obj",
			   "37" : "37.obj"};
function compareTriangles(a,b)
{
	ta0 = a[0];
	ta1 = a[1];
	ta2 = a[2];
	avgZa = (ta0[2] + ta1[2] + ta2[2])/3.0;
	tb0 = b[0];
	tb1 = b[1];
	tb2 = b[2];
	avgZb = (tb0[2] + tb1[2] + tb2[2])/3.0;
	if (avgZa < avgZb)
		return 1;
	if (avgZa > avgZb)
		return -1;
	return 0;
}

function handleOBJModel(os, filename, data)
{
	console.info(filename + ' has been retrieved from the server');

	var objData = new OBJ.Mesh(data);
	
	os.vertexBuffer = getVertexBufferWithVertices(objData.vertices);
	os.normalsBuffer = getVertexBufferWithVertices(objData.vertexNormals);
	os.textureBuffer = getVertexBufferWithVertices(objData.textures);
	os.indexBuffer = getIndexBufferWithIndices(objData.indices);
	
	os.vertices = (objData.vertices);
	os.normals = (objData.vertexNormals);
	os.texture = (objData.textures);
	os.indices = (objData.indices);
	
	console.log(os.texture);
	
	for(i = 0; i < os.vertices.length / 3; i++)
	{
		os.colorsSelected.push(1.0, 0.0, 0.0, 1.0);
		os.colorsUnSelected.push(0.0, 1.0, 0.0, 1.0);
	}
	
	os.colorBufferUnSelected = getVertexBufferWithVertices(os.colorsUnSelected);
	os.colorBufferSelected = getVertexBufferWithVertices(os.colorsSelected);
	
	os.setupBoundingBox();
}