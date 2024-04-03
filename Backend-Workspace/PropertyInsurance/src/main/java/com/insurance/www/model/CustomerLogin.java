package com.insurance.www.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class CustomerLogin 
{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column
	private long mobileno;
	@Column
	private String password;
	
	
	
	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public long getMobileno() {
		return mobileno;
	}



	public void setMobileno(long mobileno) {
		this.mobileno = mobileno;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public CustomerLogin() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
