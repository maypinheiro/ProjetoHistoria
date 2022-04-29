
using System;
using System.Linq;
using BackEnd.Model;

namespace BackEnd.Data
{
    public class HistoriaRepositorio : IHistoriaRepositorio
    { private readonly HistoriaDbContext _context;

        public HistoriaRepositorio(HistoriaDbContext context)
        {
            _context = context;
        }

        public Historia BuscarHistoriaRandomica()
        {
            var registros=  _context.Historias.Count();
            var aleatorio = new Random();
            int range = aleatorio.Next(1,registros);
            return _context.Historias.FirstOrDefault(a => a.Id == range);

        }

        public void CriarHistoria(Historia historia)
        {
            if(historia == null)
                throw new ArgumentNullException(nameof(historia)); 

            _context.Historias.Add(historia);

        }

        public bool SalvarHistoria()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
