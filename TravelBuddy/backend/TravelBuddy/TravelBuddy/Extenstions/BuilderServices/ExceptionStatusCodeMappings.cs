namespace TravelBuddy.API.Extenstions.BuilderServices
{
	public static class ExceptionStatusCodeMappings
	{
		public static readonly Dictionary<Type, int> ExceptionStatusCode = new();

		public static void InitializeExceptionStatusCodeMappings(this IServiceCollection services) 
		{
			// Get all types in the assembly where your exceptions are defined
			var exceptionAssembly = typeof(NotAuthorizedException).Assembly;
			var exceptionTypes = exceptionAssembly.GetTypes();

			// Iterate over the types to find custom exceptions
			foreach (var exceptionType in exceptionTypes)
			{
				// Check if the type is a custom exception and has the desired attributes or properties
				if (typeof(Exception).IsAssignableFrom(exceptionType) && exceptionType.IsClass && !exceptionType.IsAbstract)
				{
					var statusCodeAttribute = exceptionType.GetCustomAttribute<ExceptionHttpStatusCodeAttribute>();

					if (statusCodeAttribute != null)
					{
						// Add the exception type and associated status code to the dictionary
						ExceptionStatusCode[exceptionType] = (int)statusCodeAttribute.HttpStatusCode;
					}
				}
			}
		}
	}
}
