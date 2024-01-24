namespace TravelBuddy.API.Extenstions.Filters
{
	public static class ApplicationFilterCollection
	{
		public static FilterCollection AddApplicationFilters(this FilterCollection filterCollection)
		{
			filterCollection.Add(typeof(ExceptionHandler));

			return filterCollection;
		}
	}
}
