using IdentityApp.Data;
using IdentityApp.Models;
using IdentityAppRepositories.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityAppRepositories.UnitOfWork
{
    public class UnitOfWork : IDisposable
    {
        private ApplicationDbContext _context;
        private GenericRepository<Contact> _contactRepository;
        private GenericRepository<Company> _companyRepository;
        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }
        public GenericRepository<Contact> ContactRepository
        {
            get
            {

                if (this._contactRepository == null)
                {
                    this._contactRepository = new GenericRepository<Contact>(_context);
                }
                return _contactRepository;
            }
        }
        public GenericRepository<Company> CompanyRepository
        {
            get
            {

                if (this._companyRepository == null)
                {
                    this._companyRepository = new GenericRepository<Company>(_context);
                }
                return _companyRepository;
            }
        }


        public void Save()
        {
            _context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
