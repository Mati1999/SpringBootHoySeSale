package com.dh.hoysesale.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.dh.hoysesale.IServices.IServiceProducts;


@Controller
public class HomeController {

	@Autowired
	@Qualifier("ServiceProductsImpl")
	private IServiceProducts serviceProducts;
	
	@GetMapping(value="/")
	public String home (Model model) {
		return "index";
	}

	@GetMapping(value="/products")
	public String products (Model model) {
		
		model.addAttribute("listaCategorias", serviceProducts.getCategoriesList());
		model.addAttribute("listaBebidas", serviceProducts.getProductsList());
		
		return "products";
	}
	
	@GetMapping(value="/preg_frecuentes")
	public String pregFrecuentes (Model model) {
		return "preg_frecuentes";
	}
	
}
