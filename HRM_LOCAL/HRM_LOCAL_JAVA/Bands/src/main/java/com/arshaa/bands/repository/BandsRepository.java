package com.arshaa.bands.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arshaa.bands.entity.Bands;

public interface BandsRepository extends JpaRepository<Bands,Integer> {

	Bands  findByBandId(int id);
}
