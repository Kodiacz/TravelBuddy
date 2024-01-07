using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using TravelBuddy.API.Extenstions.BuilderServices;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.ConfigureDatabaseConnection(builder);

builder.Services.AddApplicationIdentity();

builder.Services.AddApplicationCors();

builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddApplicationAuthentication(builder);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication();

app.UseRouting();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();