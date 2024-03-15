using IdentityApp.Models;
using IdentityAppRepositories.UnitOfWork;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Data;

namespace IdentityApp.Controllers
{
    [Authorize(Roles = "Administrator")]
    public class UserController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;

        public UserController(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult Index()
        {
            List<IdentityUser> users = _userManager.Users.ToList();
            List<(IdentityUser, Task<IList<string>>)> appUsers = new List<(IdentityUser, Task<IList<string>>)> { };
            foreach (var user in users)
            {
                var role = _userManager.GetRolesAsync(user);
                if (role != null)
                {
                }

            }
            // Do something with the users, for example, pass them to a view
            return View(users);
        }
        //GET: User/Details/??
        public async Task<IActionResult> Details(string? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var user = await _userManager.FindByIdAsync(id);
            //var setUserNameResult = await _userManager.SetUserNameAsync(user, email);
            /* await _context.Contacts
               .FirstOrDefaultAsync(m => m.ContactId == id);*/
            if (user == null)
            {
                return NotFound();
            }
            var role = await _userManager.GetRolesAsync(user);
            var tuple = Tuple.Create(user, role);
            return View(tuple);
        }
        public async Task<IActionResult> Edit(string? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            var role = await _userManager.GetRolesAsync(user);
            var tuple = Tuple.Create(user, role);
            return View(tuple);
        }

        // POST: User/Edit/??
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(IdentityUser user)
        {
            string selectedValue = Request.Form["role"];
            try
            {
                IList<string> role = await _userManager.GetRolesAsync(user);
                await _userManager.RemoveFromRolesAsync(user, role);
                await _userManager.AddToRoleAsync(user, selectedValue);
                //await _contactRepository.UpdateContact(contact);
            }
            catch (DbUpdateConcurrencyException)
            {

                throw;

            }
            return RedirectToAction(nameof(Index));
        }
    }



}
