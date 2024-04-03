package com.insurance.www.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.insurance.www.model.CustomerSignup;

@Repository
public interface CustomerSignupRepository extends JpaRepository<CustomerSignup, Long>
{

	List<CustomerSignup> findAll();

//	CustomerSignup findByEmailOrMobile(String name, String email);

	CustomerSignup findByNameAndPassword(String name, String password);

	List<CustomerSignup> findByCustomerId(String customerId);

	List<CustomerSignup> findByMobileno(long mobileno);

	CustomerSignup findByMobilenoAndPassword(long mobileno, String password);
	
}
