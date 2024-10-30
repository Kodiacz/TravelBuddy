namespace TravelBuddy.API.Filters
{
	public class ExceptionHandler : IExceptionFilter
	{
		private readonly ILogger<ExceptionHandler> logger;

		public ExceptionHandler(ILogger<ExceptionHandler> logger)
		{
			this.logger = logger;
		}

		public void OnException(ExceptionContext context)
		{
			logger.LogError(context.Exception.Message);

			ProblemDetails problemDeitals = new()
			{
				Title = context.Exception.Message,
				Status = GetStatusCodeForException(context.Exception),
				Detail = context.Exception.InnerException?.Message,
			};

			context.Result = new ObjectResult(problemDeitals);

			context.ExceptionHandled = true;
		}

		private int GetStatusCodeForException(Exception exception)
		{
			Type exceptionType = exception.GetType();


			if (ExceptionStatusCodeMappings.ExceptionStatusCode.TryGetValue(exceptionType, out int statusCode))
			{
				return statusCode;
			}

			// Default case for unknown exceptions
			return (int)HttpStatusCode.BadRequest;
		}
	}
}