package com.dh.hoysesale.controllers;

import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class HomeController {

	/*GetMapping:
		-- Completar la lista de productos.
		-- Completar la lista de filtros.
	  PostMapping:
		-- Para Editar / Eliminar
	  PutMapping:
		-- Para agregar*/
		
	
	

	@RequestMapping(value="/products", method= RequestMethod.GET)
	public String productController (Locale locale, Model model) {
		return "products";
	}
	
	
	
	
}
