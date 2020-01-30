package com.dh.hoysesale.servicesImpl;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.dh.hoysesale.IServices.IServiceProducts;
import com.dh.hoysesale.entidades.Bebida;
import com.dh.hoysesale.entidades.Categoria;

@Service("ServiceProductsImpl")
public class ServiceProductsImpl implements IServiceProducts {

	@Override
	public ArrayList<Bebida> getProductsList() {
		ArrayList<Bebida> listaBebidas = new ArrayList<Bebida>();
		
		for (int i = 1; i < 7; i++) {
			Bebida bebida = new Bebida();
			bebida.setNombre("Producto " + i);
			bebida.setDescripcion("Este es el producto " + i);
			bebida.setPrecio(100 * i);
			bebida.setImagen("../images/bebida-" + i + ".jpg");
			listaBebidas.add(bebida);
		}
		
		return listaBebidas;
	}

	@Override
	public ArrayList<Categoria> getCategoriesList() {
		ArrayList<Categoria> listaCategorias = new ArrayList<Categoria>();
		Categoria categoria1 = new Categoria();
		Categoria categoria2 = new Categoria();
		Categoria categoria3 = new Categoria();
		
		categoria1.setDescripcion("Vinos");
		categoria2.setDescripcion("Gaseosas");
		categoria3.setDescripcion("Cervezas");
		
		listaCategorias.add(categoria1);
		listaCategorias.add(categoria2);
		listaCategorias.add(categoria3);
		
		return listaCategorias;
	}
	
	

}
