using System.ComponentModel.DataAnnotations;

namespace IdentityApp.DTOs
{
    public class ContactDto
    {
       
        [Required]
        public string Name { get; set; }  
        [Required]
        public string Company { get; set; }  
        [Required] 
        public string Phone { get; set; }  
        [Required] 
        public string Email { get; set; }  
        [Required]
        public string Message { get; set; }  
        [Required]
        public string Recaptcha { get; set; }
        //[Required]
        //public string RecaptchaSecret { get; set; }
    }

}
