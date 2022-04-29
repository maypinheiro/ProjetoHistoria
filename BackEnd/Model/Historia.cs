using System.ComponentModel.DataAnnotations;

namespace BackEnd.Model
{
    public class Historia
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "O campo {0} precisa ter entre {2} e {1} caracteres", MinimumLength = 3)]
        public string Nome { get; set; }

        [Required]
        [StringLength(3, ErrorMessage = "O campo {0} precisa ter entre {2} e {1} caracteres", MinimumLength = 1)]
        public int Idade { get; set; }

        [Required]
        [StringLength(2000, ErrorMessage = "O campo {0} precisa ter entre {2} e {1} caracteres", MinimumLength = 50)]
        public string Relato { get; set; }

        [Required]
        public string Imagem { get; set; }

    }
}
