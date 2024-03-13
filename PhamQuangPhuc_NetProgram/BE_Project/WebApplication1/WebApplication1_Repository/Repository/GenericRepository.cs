using Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using WebApplication1_Entity.Entity;

namespace WebApplication1_Repository.Repository
{
    public class GenericRepository<TEntity> where TEntity : class
    {
        internal ApplicationDbContext context ;
        internal DbSet<TEntity>? dbSet;

        public GenericRepository(ApplicationDbContext context)
        {
            this.context = context;
            this.dbSet = context.Set<TEntity>();
        }
        /// <summary>
        /// Gel all Data Entity 
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="orderBy"></param>
        /// <param name="includeProperties"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public virtual IEnumerable<TEntity> GetAll(
         Expression<Func<TEntity, bool>>? filter = null,
         Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>>? orderBy = null,
         params Expression<Func<TEntity, object>>[] includeProperties)
        {
            IQueryable<TEntity>? query = dbSet;

            if (filter != null && query != null)
            {
                query = query.Where(filter);
            }

            foreach (var includeProperty in includeProperties)
            {
                if (query != null)
                {
                    query = query.Include(includeProperty);
                }
            }

            if (orderBy != null && query != null)
            {
                return orderBy(query).ToList();
            }
            else
            {
                return query.ToList();
            }
        }
        public virtual async Task<TEntity> GetByID(object id)
        {
            
                return await dbSet.FindAsync(id);
            
        }

        public virtual async Task Insert(TEntity entity)
        {
           await dbSet.AddAsync(entity);
        }

        public virtual async Task Delete(object id)
        {
            TEntity entityToDelete = dbSet.Find(id);
            Delete(entityToDelete);
        }

        public virtual void Delete(TEntity entityToDelete)
        {
            if (context.Entry(entityToDelete).State == EntityState.Detached)
            {
                dbSet.Attach(entityToDelete);
            }
            dbSet.Remove(entityToDelete);
        }

        public virtual void Update(TEntity entityToUpdate)
        {
             dbSet.Attach(entityToUpdate);
             context.Entry(entityToUpdate).State = EntityState.Modified;
        }
    }
}
