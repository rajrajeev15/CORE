using DatingApp.API.model;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class Datacontext :DbContext
    {
        public Datacontext(DbContextOptions options) :base(options){}


        public DbSet<Value> values {get;set;}
    }
}