/**
 * get_result (formula text, used_values jsonb)
 * 
 * Get result for a given formula, using specified values
 *
 **/

create or replace function get_result(formula text, used_values jsonb) returns numeric as
$$
declare _key varchar;
		_val varchar;
		result numeric;
		keywords varchar[] := array['SELECT', 'UPDATE', 'INSERT', 'DELETE', 'DROP', 'ALTER'];
begin
	
	FOR _key, _val IN SELECT * FROM jsonb_each_text(used_values)
	LOOP
		formula := replace(formula, _key, _val);
	END LOOP;
	
	FOR i IN 1 .. array_upper(keywords, 1)
	LOOP
		formula := replace(formula, keywords[i], '');
	END LOOP;
	
	execute 'select ' || formula into result;
	return result;
end;
$$
language plpgsql;