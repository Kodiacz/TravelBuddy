namespace TravelBuddy.Application.Exceptions
{
	[ExceptionHttpStatusCode(HttpStatusCode.Unauthorized)]
	public class NotAuthorizedException : Exception
	{
        public NotAuthorizedException(string message) : base(message) { }
    }
}
