
using AutoMapper;
using BackEnd.Dtos;
using BackEnd.Model;

namespace BackEnd.Map
{
    public class HistoriaMap:Profile
    {

        public HistoriaMap()
        {
            CreateMap< Historia,LerHistoriaDto >();
            CreateMap<CriarHistoriaDto, Historia>();
        }
    }
}
