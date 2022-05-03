using System;
using AutoMapper;
using BackEnd.Data;
using BackEnd.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
namespace BackEnd.Controller
{

    [Route("api/[controller]")]
    [ApiController]
    public class HistoriaController:ControllerBase
    {
        private readonly IHistoriaRepositorio _repository;
        private readonly IMapper _mapper;

        public HistoriaController(
            IHistoriaRepositorio repository,
            IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper; 
        }

        [HttpGet(Name = "BuscarHistoriaRandomica")]
        public ActionResult<LerHistoriaDto> GetHistoria()
        {
            try{
                 var historia = _repository.BuscarHistoriaRandomica();
            return Ok(_mapper.Map<LerHistoriaDto>(historia));
            }
            catch(Exception ex){
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public ActionResult Post(CriarHistoriaDto criaHistoriaDto)
        {
             try{
            var historia = _mapper.Map<Model.Historia>(criaHistoriaDto);
            _repository.CriarHistoria(historia);
            _repository.SalvarHistoria();
            return Ok(historia);
            }
            catch(Exception ex){    
                return BadRequest(ex.Message);
            }
        }
    }
}
