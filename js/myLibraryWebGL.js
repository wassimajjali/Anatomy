var tabFile = {"Bassin" : "bassin.obj", 
			   "Cheville droite" : "cheville_right.obj", 
			   "Cheville gauche" : "cheville_left.obj", 
			   "Clavicule droite" : "clavicule_right.obj",
			   "Clavicule gauche" : "clavicule_left.obj", 
			   "Crâne" : "head.obj",
			   "Doigts pied droit" : "doigts_pied_right.obj",
			   "Doigts pied gauche" : "doigts_pied_left.obj",
			   "Fémure droit" : "femure_right.obj", 
			   "Fémure gauche" : "femure_left.obj", 
			   "Homoplate droit" : "homoplate_right.obj",  
			   "Homoplate gauche" : "homoplate_left.obj", 
			   "Humerus droit" : "humerus_right.obj", 
			   "Humerus gauche" : "humerus_left.obj", 
			   "Mâchoire" : "mandibule.obj",
			   "Main droite" : "main_right.obj",
			   "Main gauche" : "main_left.obj",  
			   "Radius / cubitus droit" : "avant_bras_right.obj",
			   "Radius / cubitus gauche" : "avant_bras_left_1.obj", 
			   "Rotule droite" : "genou_right.obj", 
			   "Rotule gauche" : "genou_left.obj",
			   "Sacrum" : "sacrum.obj", 
			   "Thorax" : "thorax.obj", 
			   "Tibia / perroné droit" : "tibia_right.obj", 
			   "Tibia / perroné gauche" : "tibia_left.obj", 
			   "Tronc" : "tronc.obj"};

var tabDescription = {"Bassin" : "Le bassin est une partie du squelette, en forme d'entonnoir, constitué des deux os coxaux latéraux, du coccyx et du sacrum en arrière. C'est la ceinture pelvienne, constituant la jonction entre la colonne vertébrale mobile (axe du tronc) et les membres inférieurs.", 
			   "Cheville droite" : "La cheville ou cou-de-pied est l'articulation qui relie la jambe et le pied. Elle est parfois sujette à des entorses, le plus souvent externes par flexion plantaire et pied en équin.", 
			   "Cheville gauche" : "La cheville ou cou-de-pied est l'articulation qui relie la jambe et le pied. Elle est parfois sujette à des entorses, le plus souvent externes par flexion plantaire et pied en équin.", 
			   "Clavicule droite" : "Os formant le relief antérieur de la ceinture scapulaire. Seule point de contact osseux du membre sup avec le tronc. Forme d’une arc boutant ( permet une certaine compliance pdt les choc)",
			   "Clavicule gauche" : "Os formant le relief antérieur de la ceinture scapulaire. Seule point de contact osseux du membre sup avec le tronc. Forme d’une arc boutant ( permet une certaine compliance pdt les choc)", 
			   "Crâne" : "Le crâne est la partie supérieure du squelette. Il est essentiellement destiné à protéger le cerveau. Il repose sur le rachis cervical par l'intermédiaire de l'atlas ou vertèbre C1, et maintien en antérieur le massif facial.",
			   "Doigts pied droit" : "Un doigt est un des cinq appendices du pied, analogues aux doigts de la main, mais sans véritable fonction préhensile",
			   "Doigts pied gauche" : "Un doigt est un des cinq appendices du pied, analogues aux doigts de la main, mais sans véritable fonction préhensile",
			   "Fémur droit" : "test", 
			   "Fémur gauche" : "test", 
			   "Omoplate droit" : "L'omoplate est un os plat, pair et symétrique, de forme triangulaire, situé à la partie postéro-supérieure du thorax.",  
			   "Omoplate gauche" : "L'omoplate est un os plat, pair et symétrique, de forme triangulaire, situé à la partie postéro-supérieure du thorax.", 
			   "Humerus droit" : "Humérus est un os pair et asymétrique du membre supérieur humain. Il constitue le squelette du bras. C'est un os long, donc constitué d'une diaphyse et de deux épiphyses.", 
			   "Humerus gauche" : "Humérus est un os pair et asymétrique du membre supérieur humain. Il constitue le squelette du bras. C'est un os long, donc constitué d'une diaphyse et de deux épiphyses.", 
			   "Mâchoire" : "La mandibule est un os impair (anciennement dénommé le maxillaire inférieur), formant la mâchoire inférieure. Il se compose d'un corps et de deux branches.",
			   "Main droite" : "La main est l’organe préhensile effecteur situé à l’extrémité de l’avant-bras et relié à ce dernier par le poignet",
			   "Main gauche" : "La main est l’organe préhensile effecteur situé à l’extrémité de l’avant-bras et relié à ce dernier par le poignet",  
			   "Radius / cubitus droit" : "L'avant-bras comporte vingt muscles, répartis dans trois loges, antérieure, postérieure et latérale.",
			   "Radius / cubitus gauche" : "L'avant-bras comporte vingt muscles, répartis dans trois loges, antérieure, postérieure et latérale.", 
			   "Rotule droite" : "Le genou est une articulation qui permet de joindre la jambe à la cuisse. Elle met en jeu trois os, le fémur, le tibia et la patella, par le biais de trois articulations", 
			   "Rotule gauche" : "Le genou est une articulation qui permet de joindre la jambe à la cuisse. Elle met en jeu trois os, le fémur, le tibia et la patella, par le biais de trois articulations",
			   "Sacrum" : "Le sacrum est un os impair, médian et symétrique, formé de la soudure de vertèbres sacrées (ou sacrales) chez les vertébrés terrestres (cinq vertèbres sacrées chez l'homme).", 
			   "Thorax" : "Le thorax est une région anatomique de certains animaux vertébrés ou arthropodes. Chez l'homme et les mammifères, c'est la région située entre le cou et l'abdomen", 
			   "Tibia / perroné droit" : "Le tibia est un os du membre inférieur, et plus exactement le plus grand des deux os de la jambe", 
			   "Tibia / perroné gauche" : "Le tibia est un os du membre inférieur, et plus exactement le plus grand des deux os de la jambe", 
			   "Tronc" : "Le tronc est la partie moyenne du corps. On le subdivise en trois parties, de haut en bas : le thorax, l'abdomen et le petit bassin."};

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