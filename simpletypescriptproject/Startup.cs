﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using NSwag.AspNetCore;
using simpletypescriptproject.Models;
using Microsoft.EntityFrameworkCore;

namespace simpletypescriptproject
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddDbContext<TodoContext>(opt =>
            //     opt.UseInMemoryDatabase("TodoList"));
            services.AddSwagger();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            // app.UseMvc();

            //app.Run(async (context) =>
            //{
            //    await context.Response.WriteAsync("Hello World!");
            //});

            app.UseMvc();


            //app.UseMvc(options=> {
            //    options.MapRoute("api", "api/{controller}/{action}");
            //});
            app.UseSwaggerUi3WithApiExplorer(settings=> {
                settings.GeneratorSettings.DefaultPropertyNameHandling = NJsonSchema.PropertyNameHandling.CamelCase;
            });

            app.UseDefaultFiles(GetDefaultFileOptions());
            app.UseStaticFiles();

        }

        private DefaultFilesOptions GetDefaultFileOptions()
        {
            DefaultFilesOptions options = new DefaultFilesOptions();
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("index.html");
            return options;
        }
    }
}
