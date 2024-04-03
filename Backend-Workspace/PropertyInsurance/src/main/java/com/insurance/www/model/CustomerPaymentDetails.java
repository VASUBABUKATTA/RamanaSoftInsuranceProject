package com.insurance.www.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class CustomerPaymentDetails 
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    @Column
	private long premium;
    @Column
	private long year;
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
	public long getPremium() {
		return premium;
	}
	public void setPremium(long premium) {
		this.premium = premium;
	}
	public long getYear() {
		return year;
	}
	public void setYear(long year) {
		this.year = year;
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
	public CustomerPaymentDetails(long id, long premium, long year, String customerId, String paymentId) {
		super();
		this.id = id;
		this.premium = premium;
		this.year = year;
		this.customerId = customerId;
		this.paymentId = paymentId;
	}
	public CustomerPaymentDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
	
    
	
}
