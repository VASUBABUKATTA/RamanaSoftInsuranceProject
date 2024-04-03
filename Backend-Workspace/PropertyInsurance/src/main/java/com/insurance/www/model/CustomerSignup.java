package com.insurance.www.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class CustomerSignup 
{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column
	private long mobileno;
	@Column
	private String name;
	@Column
	private String email;
	@Column
	private String password;
	@Column
	private String customerId;
	
	
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
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public CustomerSignup(long id, long mobileno, String name, String email, String password, String customerId) {
		super();
		this.id = id;
		this.mobileno = mobileno;
		this.name = name;
		this.email = email;
		this.password = password;
		this.customerId = customerId;
	}
	public CustomerSignup() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
}
