using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1_Entity.Entity
{
    [Table("tbl_contact_us")]
    public class ContactUs : BaseEntity
    {
        [Column("contact_us_id")]
        [ScaffoldColumn(false)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public new Guid Id { get; set; }

        [Column("company_name")]
        [Required]
        public string? FullName { get; set; }

        [Column("business_phone")]
        [Required]
        public string BusinessPhone { get; set; } = string.Empty;

        [Column("contact_name")]
        [Required]
        public string? CompanyName { get; set; }

        [Column("phone_number")]
        [Required]
        public string? Phone { get; set; }

        [Column("email")]
        [Required]
        public string? Email { get; set; }

        [Column("message")]
        public string Message { get; set; } = string.Empty;
    }
}

