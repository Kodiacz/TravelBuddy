namespace TravelBuddy.Application.CustomAttributes
{
	public class ExceptionHttpStatusCodeAttribute : Attribute
	{
		public HttpStatusCode HttpStatusCode { get; }

		public ExceptionHttpStatusCodeAttribute(HttpStatusCode httpStatusCode)
		{
			HttpStatusCode = httpStatusCode;
		}
	}
}
