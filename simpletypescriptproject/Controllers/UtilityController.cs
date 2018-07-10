using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace simpletypescriptproject.Controllers
{
    [Route("api/[controller]")]
    public class UtilityController : ControllerBase
    {
        public UtilityController()
        {
        }

        [HttpGet()]
        public string GetDisplayContent(string name = null) {
            // sql
            return $"Hallo {name} ";
        }

        [HttpPost()]
        public void ExecuteAction([FromForm]string name = null)
        {
            // sql
            //return $"Hallo {name}";
        }
        //
    }
}
