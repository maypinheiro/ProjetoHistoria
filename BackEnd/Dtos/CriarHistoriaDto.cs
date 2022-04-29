using System.ComponentModel.DataAnnotations;

namespace BackEnd.Dtos
{
    public class CriarHistoriaDto
    {

        [Required]
        [Display(Name ="Nome")]
        [StringLength(50, ErrorMessage = "O campo {0} precisa ter entre {2} e {1} caracteres", MinimumLength = 3)]
        public string Nome { get; set; }

        [Required]
        [Display(Name = "Idade")]
        public int Idade { get; set; }

        [Required]
        [Display(Name = "Relato")]
        [StringLength(2000, ErrorMessage = "O campo {0} precisa ter entre {2} e {1} caracteres", MinimumLength = 50)]
        public string Relato { get; set; }

        [Required]
        [Display(Name = "Imagem")]
        public string Imagem { get; set; }
    }
}
