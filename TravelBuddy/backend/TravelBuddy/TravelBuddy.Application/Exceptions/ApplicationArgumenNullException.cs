namespace TravelBuddy.API.Exceptions
{
	[ExceptionHttpStatusCode(HttpStatusCode.NotFound)]
	public class ApplicationArgumenNullException : ArgumentNullException
	{
		public ApplicationArgumenNullException(string message): base(message) { }
	}
}
