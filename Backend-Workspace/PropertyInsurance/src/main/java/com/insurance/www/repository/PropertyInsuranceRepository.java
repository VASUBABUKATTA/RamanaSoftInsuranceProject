package com.insurance.www.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.insurance.www.model.StructureAndDetails;

@Repository
public interface PropertyInsuranceRepository extends JpaRepository<StructureAndDetails, Long>
{

	List<StructureAndDetails> findByCustomerId(String customerId);
	
}

