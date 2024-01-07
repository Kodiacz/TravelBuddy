using TravelBuddy.Domain.Entities;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<TravelBuddyDbContext>(opt =>
{
	opt.UseSqlServer(connectionString);
});

builder.Services.AddDefaultIdentity<ApplicationUser>(opt => opt.SignIn.RequireConfirmedAccount = true)
	.AddEntityFrameworkStores<TravelBuddyDbContext>();

builder.Services.AddCors(opt =>
{
	opt.AddPolicy(name: "TravelBuddy", opt =>
	{
		opt
		.AllowAnyHeader()
		.AllowAnyMethod()
		.AllowAnyOrigin();
	});
});

builder.Services.AddAutoMapper(typeof(Program));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
