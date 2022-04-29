
using BackEnd.Model;

namespace BackEnd.Data
{
    public interface IHistoriaRepositorio
    {
        bool SalvarHistoria();
        void CriarHistoria(Historia historia);
        Historia BuscarHistoriaRandomica();

    }
}
