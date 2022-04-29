using BackEnd.Model;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Data
{
    public class HistoriaDbContext : DbContext
    {

        public HistoriaDbContext (DbContextOptions<HistoriaDbContext> options) : base(options)
        {
           
        }

        public DbSet<Historia> Historias { get; set; }

    }
}
