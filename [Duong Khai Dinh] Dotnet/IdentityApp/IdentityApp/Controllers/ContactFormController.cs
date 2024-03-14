using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using IdentityApp.Models;
using IdentityApp.Services;
using IdentityApp.DTOs;
using System.Diagnostics;
using IdentityApp.Data;
using IdentityApp.IServices;

namespace IdentityApp.Controllers
{
    public class ContactFormController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IGoogleServices _iGoogleService;
        private readonly IContactFormServices _iContactFormServices;
        public ContactFormController(ApplicationDbContext context)
        {
            _context = context;
            _iGoogleService = new GoogleServices();
            _iContactFormServices = new ContactFormServices();
        }
        // GET: ContactForm
        public IActionResult Index()
        {
           
            return View();
        }
        // POST: ContactFrom
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Index([Bind("ContactId,Name,Company,Phone,Email,Message,Recaptcha")] ContactDto contact)
        {
            try {
                bool IsRecaptchaed = await _iGoogleService.VerifyCaptcha(contact.Recaptcha);
                if (ModelState.IsValid && IsRecaptchaed)
                {
                    var checkSending = await _iContactFormServices.SendFormService(contact, _context);
                    if (checkSending == true)
                        ViewBag.Message = "Submit successfully";
                    else ViewBag.Message = "Submit error";
                    ModelState.Clear();
                    return View();
                }
                ViewBag.Message = "Submit failed";
                ModelState.Clear();
                return View();
            } catch(Exception ex)
            {
                ViewBag.Message = "Captcha Requied";
                ModelState.Clear();
                return View();
            }
 
        }

    }
}
