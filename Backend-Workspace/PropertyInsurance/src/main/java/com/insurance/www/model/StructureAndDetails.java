package com.insurance.www.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table

public class StructureAndDetails 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column
	private long marketValue;
	@Column
	private long squareFeet;
	@Column
	private int pincode;
	@Column
	private String buildingAge;
	@Column
	private String effected;
	@Column
	private String security;
	@Column
	private String person;
	
	@Column
	private String customerId;
    @Column
    private String paymentId;
    
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getMarketValue() {
		return marketValue;
	}
	public void setMarketValue(long marketValue) {
		this.marketValue = marketValue;
	}
	public long getSquareFeet() {
		return squareFeet;
	}
	public void setSquareFeet(long squareFeet) {
		this.squareFeet = squareFeet;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public String getBuildingAge() {
		return buildingAge;
	}
	public void setBuildingAge(String buildingAge) {
		this.buildingAge = buildingAge;
	}
	public String getEffected() {
		return effected;
	}
	public void setEffected(String effected) {
		this.effected = effected;
	}
	public String getSecurity() {
		return security;
	}
	public void setSecurity(String security) {
		this.security = security;
	}
	public String getPerson() {
		return person;
	}
	public void setPerson(String person) {
		this.person = person;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public String getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}
	public StructureAndDetails(long id, long marketValue, long squareFeet, int pincode, String buildingAge,
			String effected, String security, String person, String customerId, String paymentId) {
		super();
		this.id = id;
		this.marketValue = marketValue;
		this.squareFeet = squareFeet;
		this.pincode = pincode;
		this.buildingAge = buildingAge;
		this.effected = effected;
		this.security = security;
		this.person = person;
		this.customerId = customerId;
		this.paymentId = paymentId;
	}
	public StructureAndDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
    
		
	
	
}
