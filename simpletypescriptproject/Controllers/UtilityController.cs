using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace simpletypescriptproject.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {

        public AccountController()
        {
        }

        [Route("GetDisplayContent/{name}")]
        [HttpGet]
        public string GetDisplayContent(string name)
        {
            return $"Hello  {name} ";
        }

        [Route("SignIn")]
        [HttpPost]
        public User SignIn([FromBody]User account)
        {
            //var output = // db callfdfdsöfsd
            return new User { Username = "sana", Password = "saad" };
        }
    }

    public class User
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}
