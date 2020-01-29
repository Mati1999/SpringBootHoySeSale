package com.dh.hoysesale.entidades;

public class Bebida{
	
	private int id_bebida;
	private String nombre;
	private String descripcion;
	private int precio;
	private int stock;
	private String imagen;
	private Categoria categoria;
	private boolean vigencia;
	
	//Getters and Setters
	public int getId_bebida() {
		return id_bebida;
	}
	public void setId_bebida(int id_bebida) {
		this.id_bebida = id_bebida;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public int getPrecio() {
		return precio;
	}
	public void setPrecio(int precio) {
		this.precio = precio;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	public String getImagen() {
		return imagen;
	}
	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	public Categoria getCategoria() {
		return categoria;
	}
	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	public boolean isVigencia() {
		return vigencia;
	}
	public void setVigencia(boolean vigencia) {
		this.vigencia = vigencia;
	}
	
}