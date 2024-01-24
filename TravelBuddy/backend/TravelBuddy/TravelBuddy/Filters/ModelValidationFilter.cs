using System.Reflection;

namespace TravelBuddy.API.Filters
{
	public class ModelValidationFilterAttribute : Attribute, IAsyncActionFilter
	{
		public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
		{
			if (!context.ModelState.IsValid)
			{
				var errors = context.ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage));
				var errorMessage = string.Join(" ", errors);

				var validationProblemDetails = new ValidationProblemDetails
				{
					Detail = errorMessage,
					Instance = context.HttpContext.Request.Path,
					Status = 400,
					Type = "https://tools.ietf.org/html/rfc7231#section-6.5.1"
				};

				context.Result = new BadRequestObjectResult(validationProblemDetails);
				return;
			}

			await next();
		}
	}
}