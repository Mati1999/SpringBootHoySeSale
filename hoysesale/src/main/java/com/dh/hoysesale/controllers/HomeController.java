package com.dh.hoysesale.controllers;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import com.dh.hoysesale.IServices.IServiceProducts;


@Controller
public class HomeController {
	
	@Autowired
	@Qualifier("ServiceProductsImpl")
	private IServiceProducts serviceProducts;

	/*
	 * 
	  GetMapping: ----(leer, consultar)
		-- Completar la lista de productos.
		
		-- Completar la lista de filtros. ???
		
	  PostMapping: ----(crear)
	    -- Para agregar
		 
	  PutMapping ----(editar)
		-- Para Editar
		
	  DeleteMapping 
	    -- Eliminar  
	*/
		
	
	

	@GetMapping("/products")
	public String productController (Locale locale, Model model) {
		return "products";
	}
	
	
	@PostMapping()  //para agregar producto
	public String createProduct() {
		return "";
	}
	
	@PutMapping		//para editar producto
	public String editProduct() {
		return "";
	}
	
	
	@DeleteMapping      //para eliminar producto
	public String deleteProduct() {
		return "";
	}
	
}
