
  Pod::Spec.new do |s|
    s.name = 'BpAdd'
    s.version = '0.0.1'
    s.summary = 'Add two numbers'
    s.license = 'MIT'
    s.homepage = 'a'
    s.author = ''
    s.source = { :git => 'a', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end