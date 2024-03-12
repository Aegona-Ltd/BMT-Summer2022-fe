using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System.Net;
using IdentityApp.Data;
using IdentityApp.Models;
using Microsoft.AspNetCore.Authorization;
using IdentityAppRepositories.IRepositories;
using IdentityAppRepositories.Repositories;
using IdentityAppRepositories.UnitOfWork;

namespace IdentityApp.Controllers
{
    public class ContactsController : Controller
    {

        private UnitOfWork _unitOfWork;
        public ContactsController(ApplicationDbContext context)
        {
           _unitOfWork = new UnitOfWork(context);
        }
       



        // GET: Contacts
        [Authorize(Roles = "Administrator, Moderator")]
        public async Task<IActionResult> Index()
        {

            var listContact = _unitOfWork.ContactRepository.Get();
            return View(listContact);
           
        }

        // GET: Contacts/Details/5
        [Authorize(Roles = "Administrator, Moderator")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var contact = _unitOfWork.ContactRepository.GetByID(id);
             /* await _context.Contacts
                .FirstOrDefaultAsync(m => m.ContactId == id);*/
            if (contact == null)
            {
                return NotFound();
            }

            return View(contact);
        }

        // GET: Contacts/Create
        [Authorize(Roles = "Administrator, Moderator")]
        public IActionResult Create()
        {
            return View();
        }
        [Authorize(Roles = "Administrator, Moderator")]
        // POST: Contacts/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ContactId,Name,Company,Phone,Email,Message")] Contact contact)
        {
            if (ModelState.IsValid)
            {
                 _unitOfWork.ContactRepository.Insert(contact);
                //await _contactRepository.InsertContact(contact);
                return RedirectToAction(nameof(Index));
            }
            return View(contact);
        }

        // GET: Contacts/Edit/5
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var contact = _unitOfWork.ContactRepository.GetByID(id);
            /*var contact = await _contactRepository.GetContactByID(id);*/
            /*var contact = await _context.Contacts.FindAsync(id);*/
            if (contact == null)
            {
                return NotFound();
            }
            return View(contact);
        }

        // POST: Contacts/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ContactId,Name,Company,Phone,Email,Message")] Contact contact)
        {
            if (id != contact.ContactId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _unitOfWork.ContactRepository.Update(contact);
                    //await _contactRepository.UpdateContact(contact);
                }
                catch (DbUpdateConcurrencyException)
                {
                   /* if (!ContactExists(contact.ContactId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }*/
                }
                return RedirectToAction(nameof(Index));
            }
            return View(contact);
        }
        [Authorize(Roles = "Administrator")]
        // GET: Contacts/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null )
            {
                return NotFound();
            }
            var contact = _unitOfWork.ContactRepository.GetByID(id);
            //var contact = await _contactRepository.GetContactByID(id);
           /* var contact = await _context.Contacts
                .FirstOrDefaultAsync(m => m.ContactId == id);*/
            if (contact == null)
            {
                return NotFound();
            }
        
            return View(contact);
        }
        [Authorize(Roles = "Administrator")]
        // POST: Contacts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            /*  if (_context.Contacts == null)
              {
                  return Problem("Entity set 'DBFastTrackContext.Contacts'  is null.");
              }*/
           _unitOfWork.ContactRepository.Delete(id);
            /*await _contactRepository.DeleteContact(id);*/
          
            return RedirectToAction(nameof(Index));
        }

       /* private bool ContactExists(int id)
        {
          return (_context.Contacts?.Any(e => e.ContactId == id)).GetValueOrDefault();
        }*/
    }
}
