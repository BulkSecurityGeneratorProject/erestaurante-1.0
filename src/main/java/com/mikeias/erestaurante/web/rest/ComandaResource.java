package com.mikeias.erestaurante.web.rest;

import com.mikeias.erestaurante.service.PrivilegioService;
import com.mikeias.erestaurante.domain.Cargo;
import com.mikeias.erestaurante.repository.CargoRepository;

import com.codahale.metrics.annotation.Timed;
import com.mikeias.erestaurante.domain.Comanda;

import com.mikeias.erestaurante.repository.ComandaRepository;
import com.mikeias.erestaurante.web.rest.errors.BadRequestAlertException;
import com.mikeias.erestaurante.web.rest.util.HeaderUtil;
import com.mikeias.erestaurante.web.rest.util.PaginationUtil;
import io.swagger.annotations.ApiParam;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Comanda.
 */
@RestController
@RequestMapping("/api")
public class ComandaResource {

    private final Logger log = LoggerFactory.getLogger(ComandaResource.class);

    private static final String ENTITY_NAME = "comanda";

    private final ComandaRepository comandaRepository;


//////////////////////////////////REQUER PRIVILEGIOS
                                  private final CargoRepository cargoRepository;

                                  public ComandaResource(ComandaRepository comandaRepository, CargoRepository cargoRepository) {
                                  this.comandaRepository = comandaRepository;
                                  this.cargoRepository = cargoRepository;
                                  }
//////////////////////////////////REQUER PRIVILEGIOS

    /**
     * POST  /comandas : Create a new comanda.
     *
     * @param comanda the comanda to create
     * @return the ResponseEntity with status 201 (Created) and with body the new comanda, or with status 400 (Bad Request) if the comanda has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/comandas")
    @Timed
    public ResponseEntity<Comanda> createComanda(@Valid @RequestBody Comanda comanda) throws URISyntaxException {
        log.debug("REST request to save Comanda : {}", comanda);

//////////////////////////////////REQUER PRIVILEGIOS
                                  if (!PrivilegioService.podeCriar(cargoRepository, ENTITY_NAME)) {
                                  log.error("TENTATIVA DE CRIAR SEM PERMISSÃO BLOQUEADA! " + ENTITY_NAME  + " : {}", comanda);
                                  return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "privilegios insuficientes.", "Este usuario não possui privilegios sufuentes para criar esta entidade.")).body(null);
                                  }
//////////////////////////////////REQUER PRIVILEGIOS
        if (comanda.getId() != null) {
            throw new BadRequestAlertException("A new comanda cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Comanda result = comandaRepository.save(comanda);
        return ResponseEntity.created(new URI("/api/comandas/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /comandas : Updates an existing comanda.
     *
     * @param comanda the comanda to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated comanda,
     * or with status 400 (Bad Request) if the comanda is not valid,
     * or with status 500 (Internal Server Error) if the comanda couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/comandas")
    @Timed
    public ResponseEntity<Comanda> updateComanda(@Valid @RequestBody Comanda comanda) throws URISyntaxException {
        log.debug("REST request to update Comanda : {}", comanda);

//////////////////////////////////REQUER PRIVILEGIOS
                                  if (!PrivilegioService.podeEditar(cargoRepository, ENTITY_NAME)) {
                                  log.error("TENTATIVA DE EDITAR SEM PERMISSÃO BLOQUEADA! " + ENTITY_NAME  + " : {}", comanda);
                                  return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "privilegios insuficientes.", "Este usuario não possui privilegios sufuentes para editar esta entidade.")).body(null);
                                  }
//////////////////////////////////REQUER PRIVILEGIOS
        if (comanda.getId() == null) {
            return createComanda(comanda);
        }
        Comanda result = comandaRepository.save(comanda);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, comanda.getId().toString()))
            .body(result);
    }

    /**
     * GET  /comandas : get all the comandas.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of comandas in body
     */
    @GetMapping("/comandas")
    @Timed
    public ResponseEntity<List<Comanda>> getAllComandas(@ApiParam Pageable pageable) {
        log.debug("REST request to get a page of Comandas");

//////////////////////////////////REQUER PRIVILEGIOS
                                  if (!PrivilegioService.podeVer(cargoRepository, ENTITY_NAME)) {
                                  log.error("TENTATIVA DE VISUALIZAR SEM PERMISSÃO BLOQUEADA! " + ENTITY_NAME);
                                  return  null;
                                  }

//////////////////////////////////REQUER PRIVILEGIOS
        Page<Comanda> page = comandaRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/comandas");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /comandas/:id : get the "id" comanda.
     *
     * @param id the id of the comanda to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the comanda, or with status 404 (Not Found)
     */
    @GetMapping("/comandas/{id}")
    @Timed
    public ResponseEntity<Comanda> getComanda(@PathVariable Long id) {
        log.debug("REST request to get Comanda : {}", id);
        Comanda comanda = comandaRepository.findOneWithEagerRelationships(id);

//////////////////////////////////REQUER PRIVILEGIOS
                                  if (!PrivilegioService.podeVer(cargoRepository, ENTITY_NAME)) {
                                  comanda = null;
                                  log.error("TENTATIVA DE VISUALIZAR SEM PERMISSÃO BLOQUEADA! " + ENTITY_NAME + " : {}", id);
                                  }
//////////////////////////////////REQUER PRIVILEGIOS
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(comanda));
    }

    /**
     * DELETE  /comandas/:id : delete the "id" comanda.
     *
     * @param id the id of the comanda to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/comandas/{id}")
    @Timed
    public ResponseEntity<Void> deleteComanda(@PathVariable Long id) {
        log.debug("REST request to delete Comanda : {}", id);

//////////////////////////////////REQUER PRIVILEGIOS
                                  if (PrivilegioService.podeDeletar(cargoRepository, ENTITY_NAME)) {
                                  comandaRepository.delete(id);
                                  } else {
                                  log.error("TENTATIVA DE EXCUIR SEM PERMISSÃO BLOQUEADA! " + ENTITY_NAME + " : {}", id);
                                  return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "privilegios insuficientes.", "Este usuario não possui privilegios sufuentes para deletar esta entidade.")).body(null);
                                  }
//////////////////////////////////REQUER PRIVILEGIOS
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
