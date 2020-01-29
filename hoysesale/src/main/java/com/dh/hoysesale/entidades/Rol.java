package com.dh.hoysesale.entidades;

public class Rol {
	
	private int id_rol;
	private String descripcion;
	private boolean vigencia;
	
	//Getters and Setters
	public int getId_rol() {
		return id_rol;
	}
	public void setId_rol(int id_rol) {
		this.id_rol = id_rol;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public boolean isVigencia() {
		return vigencia;
	}
	public void setVigencia(boolean vigencia) {
		this.vigencia = vigencia;
	}
	
}