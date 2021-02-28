FROM mcr.microsoft.com/dotnet/aspnet
WORKDIR /app
COPY ./bin/Debug/net5.0/publish/ /app
ENTRYPOINT ["dotnet", "mitchfen_personal_website.dll"]