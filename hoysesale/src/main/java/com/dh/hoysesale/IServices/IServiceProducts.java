package com.dh.hoysesale.IServices;

import java.util.ArrayList;

import com.dh.hoysesale.entidades.Bebida;
import com.dh.hoysesale.entidades.Categoria;

public interface IServiceProducts {

	public ArrayList<Bebida> getProductsList();
	public ArrayList<Categoria> getCategoriesList();
	
}
