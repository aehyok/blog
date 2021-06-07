%define _binaries_in_noarch_packages_terminate_build   0
%define installpath /usr/local/sunlight/dvs

Name:           dvs-ui
License:        GPL
Group:          sunlight
Url:            www.sunlight-tech.com
Version:        _VERSION_
Release:        _RELEASE_
Summary:        Sunlight Dvs Cms
Source:         %{name}.%{version}.%{release}.tar.gz
BuildRoot:      %{_tmppath}/%{name}-%{version}-build
BuildArch:      noarch
Conflicts:      %{name} <= %{version}

%description

%prep
%setup -c

%install
install -d $RPM_BUILD_ROOT%{installpath}/%{name}
cp -ar %{name}.%{version}.%{release}/* $RPM_BUILD_ROOT%{installpath}/%{name}/

%post

%postun

%pre 

%preun

%clean
[ "$RPM_BUILD_ROOT" != "/" ] && rm -rf $RPM_BUILD_ROOT
rm -rf $RPM_BUILD_DIR/%{name}-%{version}

%files
%defattr(-, nobody, nobody)
%{installpath}
